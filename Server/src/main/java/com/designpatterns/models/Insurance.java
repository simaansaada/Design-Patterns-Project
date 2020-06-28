package com.designpatterns.models;

import java.sql.Date;

public class Insurance {
	private String name;
	private String familyName;
	private Date date;
	private String remarks;
	private String type;

	public Insurance(String name, String familyName, Date date, String remarks, String type) {
		this.name = name;
		this.familyName = familyName;
		this.date = date;
		this.remarks = remarks;
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFamilyName() {
		return familyName;
	}

	public void setFamilyName(String familyName) {
		this.familyName = familyName;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
}
