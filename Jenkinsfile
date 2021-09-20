pipeline {
  agent { dockerfile true }
  stages {
    stage('Docker compose dependencies') {
      steps {
        echo 'docker-compose build angular-app && docker-compose up'
      }
    }
  }
}