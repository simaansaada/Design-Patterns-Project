package com.designpatterns.dao;

import java.util.ArrayList;
import java.util.List;

import com.designpatterns.interfaces.ICriteria;
import com.designpatterns.models.Insurance;

public class CriteriaCar implements ICriteria {


	@Override
	public List<Insurance> meetCriteria(List<Insurance> insurances) {
		List<Insurance> carInsurances = new ArrayList<>();

		for (Insurance insurance: insurances) {
			if (insurance.getType().equals("Car")){
				carInsurances.add(insurance);
			}
		}
		return carInsurances ;
	}

}