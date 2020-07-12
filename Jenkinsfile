pipeline {
  agent any
  stages {
    stage('buiding') {
      steps {
        sh '''export PATH=/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/bin 
cd ClientApp
ng build --prod'''
      }
    }

    stage('setting up the environment') {
      steps {
        sh '''export PATH=/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/bin 
cd ClientApp
npm install
'''
      }
    }

    stage('dfsfdg') {
      steps {
        sh 'echo \'ss\''
      }
    }

  }
}