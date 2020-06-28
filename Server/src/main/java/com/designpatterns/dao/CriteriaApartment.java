package com.designpatterns.dao;

import java.util.ArrayList;
import java.util.List;

import com.designpatterns.interfaces.ICriteria;
import com.designpatterns.models.Insurance;

public class CriteriaApartment implements ICriteria{

	@Override
	public List<Insurance> meetCriteria(List<Insurance> insurances) {
		List<Insurance> apartmentInsurances = new ArrayList<>();

		for (Insurance insurance : insurances) {
			if (insurance.getType().equalsIgnoreCase(("apartment") )){
				apartmentInsurances.add(insurance);
			}
		}
		return apartmentInsurances;
	}

}
