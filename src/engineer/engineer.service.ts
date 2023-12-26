import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { filterFieldOfGithubProfile, filterFieldOfGithubRepo } from './utils';

@Injectable()
export class EngineerService {
  constructor(private readonly httpService: HttpService) {}

  async getEngineer(username: string) {
    // get github profile
    const getGithubProfile = this.httpService
      .get(`https://api.github.com/users/${username}`)
      .pipe(
        map((response) => {
          // githubProfileData = response.data;
          return response.data;
        }),
      );

    // get github user repo list
    const getRepoList = this.httpService
      .get(`https://api.github.com/users/${username}/repos`)
      .pipe(
        map((response) => {
          return response.data;
        }),
      );

    // get github user follower list
    const getFollowersList = this.httpService
      .get(`https://api.github.com/users/${username}/followers`)
      .pipe(
        map((response) => {
          return response.data;
        }),
      );

    // Convert data to object
    const githubProfileData = await lastValueFrom(getGithubProfile);
    const githubFollowerList = await lastValueFrom(getFollowersList);
    const repoList = await lastValueFrom(getRepoList);

    // remove a repo_url, followers_url key
    // delete githubProfileData.repos_url;
    // delete githubProfileData.followers_url;

    // console.log(githubProfileData);
    // console.log(repoList);

    const selectiveFieldRepoList = repoList.map((field: any) =>
      filterFieldOfGithubRepo(field),
    );
    // console.log(filterFieldOfGithubRepo(repoList));

    // Custom response
    return {
      ...filterFieldOfGithubProfile(githubProfileData),
      repos: selectiveFieldRepoList,
      followers: {
        total: githubFollowerList.length,
        followers: githubFollowerList,
      },
    };
  }
}
