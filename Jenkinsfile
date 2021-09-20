pipeline {
    agent { dockerfile {
        filename 'Dockerfile'
        dir 'build'
        label 'ng-docker-app'
    } }
    stages {
        stage('Test') {
            steps {
                echo 'node --version'
                echo 'svn --version'
            }
        }
    }
}