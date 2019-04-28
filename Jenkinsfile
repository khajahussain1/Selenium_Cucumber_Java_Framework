node('master') {
    
    // some block
    //git 'https://github.com/khajahussain1/Selenium_Cucumber_Framework'
    //bat label: '', script: 'mvn verify'
    
    stage('SCM Checkout stage') {
           
                 git 'https://github.com/khajahussain1/Selenium_Cucumber_Framework'   
 
               }
        
        
        stage('Compile Stage') {
            
                    bat label: '', script: 'mvn clean compile'
                 
                   
               }
               
               stage('Testing Stage') {
            
                   bat label: '', script: 'mvn test'
                 
                   
               }
               
               stage('Deployment Stage') {
            
                   bat label: '', script: 'mvn deploy'
                 
                   
               }
               
}

