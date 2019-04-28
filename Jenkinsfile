node {
    
    
        stage('SCM Checkout stage') {
           
                git 'https://github.com/khajahussain1/Selenium_Cucumber_Framework'                   

                
 
               }
        
        stage('Compile Stage') {
            
                    def mvnHome = tool name: 'MAVEN_HOME', type: 'maven'
               
                    sh "${mvnHome}/bin/mvn install"
                 
                   
               }
        
        
        stage('Testing Stage') {
           
                 def mvnHome = tool name: 'MAVEN_HOME', type: 'maven'
               
                    sh "${mvnHome}/bin/mvn test"                   

                }
 
               
        
        
        stage('Deploy Stage') {
           
                def mvnHome = tool name: 'MAVEN_HOME', type: 'maven'
               
                    sh "${mvnHome}/bin/mvn deploy"                  

                }
 
               
        
        }
        
       
    
