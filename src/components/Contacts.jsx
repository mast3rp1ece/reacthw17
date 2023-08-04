import React, {useState} from "react";

const Contacts = ({ contacts }) => {
	const [search, setSearch] = useState('');
	const [genderFilters, setGenderFilters] = useState({
	  male: true,
	  female: true,
	  unspecified: true,
	});
 
	const handleSearchChange = (event) => {
	  setSearch(event.target.value);
	};
 
	const handleGenderChange = (event) => {
	  const { name, checked } = event.target;
	  setGenderFilters({ ...genderFilters, [name]: checked });
	};
 
	const filteredContacts = contacts.filter((contact) => {
	  const fullName = `${contact.lastName} ${contact.firstName}`.toLowerCase();
	  const searchFilter = fullName.includes(search.toLowerCase());
	  const genderFilter = genderFilters[contact.gender];
	  
	  
	  return searchFilter && genderFilter;
	});
 
	return (
	  <div>
		 <div className="search-input">
			<input
						type="text"
						value={search}
						onChange={handleSearchChange}
						placeholder="Пошук за ім'ям або прізвищем"
			/>
		 </div>
		 <div className="gender-filters">
			<label>
			  <input
				 type="checkbox"
				 name="male"
				 checked={genderFilters.male}
				 onChange={handleGenderChange}
			  />
			  Чоловіки
			</label>
			<label>
			  <input
				 type="checkbox"
				 name="female"
				 checked={genderFilters.female}
				 onChange={handleGenderChange}
			  />
			  Жінки
			</label>
			<label>
			  <input
				 type="checkbox"
				 name="unspecified"
				 checked={genderFilters.unspecified}
				 onChange={handleGenderChange}
			  />
			  Не вказано
			</label>
		 </div>
		 <div className="contact-list">
			{filteredContacts.map((contact, index) => (
			  <Contact key={index} {...contact} />
			))}
		 </div>
	  </div>
	);
 };
 
 const Contact = ({ firstName, lastName, phone, gender }) => {
	return (
	  <div className="contact">
		 <p>Ім'я: {firstName}</p>
		 <p>Прізвище: {lastName}</p>
		 <p>Телефон: {phone}</p>
		 <p>Стать: {gender}</p>
	  </div>
	);
 };

 export default Contacts