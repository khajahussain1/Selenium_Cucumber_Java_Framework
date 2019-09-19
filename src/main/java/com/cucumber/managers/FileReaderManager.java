package com.cucumber.managers;

public class FileReaderManager {

	private static FileReaderManager fileReaderManager;
	private static ConfigFileReader configFileReader;
	
	//private static FileReaderManager fileReaderManager = new FileReaderManager();
	public String s;

	private FileReaderManager() {
		
		s = "Hello I am a string part of Singleton class"; 

	}

	public static FileReaderManager getInstance() {
		System.out.println("staredted FileReaderManager object");
		
		if(fileReaderManager ==null)
		{
			fileReaderManager = new FileReaderManager(); 
		}

		return fileReaderManager;
	}

	public ConfigFileReader getConfigReader() {
		System.out.println("staredted ConfigFileReader object");

		if (configFileReader == null)
		{
			configFileReader = new ConfigFileReader();
		}
		
		return configFileReader;
	}

}
