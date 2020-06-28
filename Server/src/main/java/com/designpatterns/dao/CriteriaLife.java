package com.designpatterns.dao;

import java.util.ArrayList;
import java.util.List;

import com.designpatterns.interfaces.ICriteria;
import com.designpatterns.models.Insurance;

public class CriteriaLife implements ICriteria{

	@Override
	public List<Insurance> meetCriteria(List<Insurance> insurances) {
		List<Insurance> lifeInsurances = new ArrayList<>();

		for (Insurance insurance : insurances) {
			if (insurance.getType().equalsIgnoreCase(("Life") )){
				lifeInsurances.add(insurance);
			}
		}
		return lifeInsurances;
	}
}




