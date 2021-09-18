pipeline {
  agent any
  tools {
    nodejs '16.9.1'
  }

  options {
    timeout(time: 2, unit: 'MINUTES')
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm i'
      }
    }
    stage('Despliegue') {
      steps {
        sh 'ng serve'
      }
    }
  }
}