pipeline {
  agent any
  stages {
    stage('buiding') {
      steps {
        sh '''export PATH=/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/bin
ng build --prod'''
      }
    }
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

      }
    }

    

    stage('dfsfdg') {
      parallel {
        stage('dfsfdg') {
          steps {
            sh 'echo \'ss\''
          }
        }

        stage('asdasd') {
          steps {
            sh 'echo \'\''
          }
        }

      }
    }

  }
}