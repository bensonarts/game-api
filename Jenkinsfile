pipeline {
    agent any

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Build Image') {
            steps {
                sh "docker build . -t borrowworks/dw-web-api:${env.BRANCH_NAME}-${env.BUILD_ID} -t borrowworks/dw-web-api:latest"
            }
        }
        stage('Publish - Docker Hub') {
            steps {
                withDockerRegistry(url: '', credentialsId: 'docker-hub-creds') {
                    sh "docker push borrowworks/dw-web-api:${env.BRANCH_NAME}-${env.BUILD_ID}"
                    sh "docker push borrowworks/dw-web-api:latest"
                }
            }
        }
    }
}
