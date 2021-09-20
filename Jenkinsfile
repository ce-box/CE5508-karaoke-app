pipeline {
  agent { dockerfile true }
  tools {
    nodejs '16.9.1'
  }

  options {
    timeout(time: 2, unit: 'MINUTES')
  }

  stages {
    stage('Docker compose dependencies') {
      steps {
        echo 'docker-compose build angular-app && docker-compose up'
      }
    }
  }
}