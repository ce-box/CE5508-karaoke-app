pipeline {
    agent { dockerfile true}
    stages {
        stage('Test') {
            steps {
                echo 'node --version'
                echo 'svn --version'
            }
        }
    }
}