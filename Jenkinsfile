pipeline {
    agent any 
    stages {
    
                
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
       
    
