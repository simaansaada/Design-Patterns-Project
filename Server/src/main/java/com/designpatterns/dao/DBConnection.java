package com.designpatterns.dao;

import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

@Service
public class DBConnection {

	private Properties properties;
	private static Connection conn = null;

	private DBConnection() {
		try (FileInputStream inputStream = new FileInputStream(new File("db.config"))) {

			properties = new Properties();
			properties.load(inputStream);

		} catch (IOException exception) {
			exception.printStackTrace();
		}
	}

	//Singleton pattern
	public synchronized Connection getConnection() throws SQLException {

		String url = properties.getProperty("url");

		try {
			if (conn != null && !conn.isClosed()) {
				return conn;
			} else {

				conn = DriverManager.getConnection(url, properties.getProperty("user"), properties.getProperty("pass"));
				System.out.println("SQL connected successfully.");
				return conn;
			}
		} catch (SQLException ex) {/* handle any errors */
			System.out.println("HERE");
			System.out.println("SQLException: " + ex.getMessage());
			System.out.println("SQLState: " + ex.getSQLState());
			System.out.println("VendorError: " + ex.getErrorCode());
			return null;
		}
	}
}