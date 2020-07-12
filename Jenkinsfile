pipeline {
  agent any
  stages {
    stage('setting up the environment') {
      steps {
        sh '''export PATH=/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/bin
npm install
'''
      }
    }

  }
}