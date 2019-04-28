pipeline {
    agent any 
    stages {
    
        stage('SCM Checkout stage') {
            steps {
                git 'https://github.com/khajahussain1/Selenium_Cucumber_Framework'                   

                }
 
               }
        
        stage('Compile Stage') {
            steps {
                    def mvnHome = tool name: 'MAVEN_HOME', type: 'maven'
               
                    sh "${mvnHome}/bin/mvn install"
                 
                   
               }
        }
        
        stage('Testing Stage') {
            steps {
                 def mvnHome = tool name: 'MAVEN_HOME', type: 'maven'
               
                    sh "${mvnHome}/bin/mvn test"                   

                }
 
               }
        
        
        stage('Deploy Stage') {
            steps {
                def mvnHome = tool name: 'MAVEN_HOME', type: 'maven'
               
                    sh "${mvnHome}/bin/mvn deploy"                  

                }
 
               }
        }
        }
       
    
