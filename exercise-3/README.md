# Exercise 3: Team Flow

## Git

1. `cd exercise-2`
1. `git init`
1. `git add .`
1. `git commit -m "init repo"`


## Github

1. Log into [Github.com](https://github.com)
1. Create a [new repo](https://github.com/new)
  - Do _not_ choose a readme, gitignore or license file!
1. Follow the _push an existing repository from the command line_ instructions


## Divshot

1. `npm install -g divshot-cli`
1. `divshot login`
1. `divshot config:add name br-frontend-testing-YOURNAME`
1. `git commit -am "Divshot app name"`
1. `divshot auth:token` *_Save this!_*


## CircleCI

1. Log into [CircleCI.com](http://circleci.com)
1. Click the Add Projects link in the left-hand nav. You should now see a list
of your GitHub repos on the page, each with a button to tell CircleCI to follow
that repo.
1. Select Github Account under which you created your repository.
1. Find your repository and click _Build Project_.

## CircleCI - Continuous Deployment
1. Click Project settings for your project (gear icon).
1. Under `Environment Variables` settings under the settings for your repo:
1. Create a new variable named `DIVSHOT_TOKEN` using the value you got from `divshot auth:token`
1. Future builds will automagically deploy to Divshot staging environment.


## (optional) Code Climate

1. Log into [codeclimate.com](http://codeclimate.com) and click the `Add Open Source Repo` button in the top right.
1. Select your repo and then give it a minute to process. (You'll have to refresh)
1. Once it's ready, click on the settings link (gear icon) next to the repo name and then select Analysis
1. Select which languages you want to test.
1. Under `Analysis`, you'll also find the ability to exclude third-party libraries and code that should not be evaluated. Something like this is probably appropriate to be ignored:

  ```
  Exclude patterns:
    js/lib/*
    specs/lib/*
  ```

