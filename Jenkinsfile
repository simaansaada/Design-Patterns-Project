pipeline {
  agent any
  stages {
    stage('setting up the environment') {
      parallel {
        stage('setting up the environment') {
          steps {
            sh '''export PATH=/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/bin
npm install
'''
          }
        }

        stage('setting 2') {
          steps {
            sh '''export PATH=/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/bin
npm install'''
          }
        }

        stage('getting the project code') {
          steps {
            git(url: 'https://github.com/simaansaada/Design-Patterns-Project', branch: 'master', credentialsId: 'w')
          }
        }

      }
    }

    stage('buiding') {
      steps {
        sh '''export PATH=/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/bin
ng build --prod'''
      }
    }

  }
}