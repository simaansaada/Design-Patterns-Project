package com.designpatterns.dao;

import java.util.ArrayList;
import java.util.List;

import com.designpatterns.interfaces.ICriteria;
import com.designpatterns.models.Insurance;

public class CriteriaHealth implements ICriteria {

	@Override
	public List<Insurance> meetCriteria(List<Insurance> insurances) {
		List<Insurance> healthInsurances = new ArrayList<>();

		for (Insurance insurance : insurances) {
			if (insurance.getType().equalsIgnoreCase("Health")) {
				healthInsurances.add(insurance);
			}
		}
		return healthInsurances;
	}

}