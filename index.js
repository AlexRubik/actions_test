// Octokit.js
// https://github.com/octokit/core.js#readme

import * as dotenv from 'dotenv';
dotenv.config();

import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: process.env.GIT_PERSONAL_ACCESS_TOKEN
  })
  
  await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
    owner: 'AlexRubik',
    repo: 'actions_test',
    workflow_id: 'action.yml', // yaml file name for workflow
    ref: 'main' // branch name
    
  })

