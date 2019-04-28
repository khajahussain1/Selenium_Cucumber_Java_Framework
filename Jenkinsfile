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
                   
                   cucumber failedFeaturesNumber: -1, failedScenariosNumber: -1, failedStepsNumber: -1, fileIncludePattern: '**/*.json', pendingStepsNumber: -1, skippedStepsNumber: -1, sortingMethod: 'ALPHABETICAL', undefinedStepsNumber: -1
                 
                   
               }
               
               stage('Deployment Stage') {
            
                   bat label: '', script: 'mvn deploy'
                 
                   
               }
               
}

