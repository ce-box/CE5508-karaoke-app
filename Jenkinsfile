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
        echo 'npm i'
      }
    }
    stage('Despliegue') {
      steps {
        echo 'ng serve'
      }
    }
  }
}