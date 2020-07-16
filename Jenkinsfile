pipeline {
  agent any
  stages {
    stage('setting up the environment') {
      steps {
        sh '''export PATH=/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/bin 
cd ClientApp
npm install
'''
      }
    }

    stage('buiding') {
      steps {
        sh '''export PATH=/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/bin 
cd ClientApp
ng build --prod'''
      }
    }

    stage('dfsfdg') {
      steps {
        sh 'echo \'ss\''
        sh 'echo'
      }
    }

  }
}