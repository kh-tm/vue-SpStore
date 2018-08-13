let phonesQuery = new Promise((resolve, reject) => {

    /*   запрос   */
    fetch('../database/sqlmaster.php')
		.then( (resp) => {
			if (resp.status === 200) return resp.json();
			else console.log('Произошла ошибка при попытке запроса к базе')
		})
		.then( (data) => {
			loadPhotosURL
				.then( (imagesURL) => {
					conversion(data, imagesURL);
				} )
				.then( () => {
					resolve('success');
				});
		} )
		.catch( (err) => console.error(err) );

});

let loadPhotosURL = new Promise((resolve, reject) => {

    /*   запрос   */
    fetch('../database/scandir.php')
		.then( (resp) => {
			if (resp.status === 200) return resp.json();
			else console.log('Произошла ошибка при попытке запроса к базе')
		})
		.then( (data) => {
			resolve(data);
		})
		.catch( (err) => console.error(err) );

});