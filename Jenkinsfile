pipeline {
    agent any
    tools { nodejs 'Nodejs' }
    stages {
        stage('Install depedency') {
            steps {
                sh 'npm i'
            }
        }
        stage('Run Tests') {
            parallel {
                stage('Smoke') {
                    steps {
                        sh 'npm run smoke'
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results']]
              ])
            },
            deleteDir()
        }
    }
}
