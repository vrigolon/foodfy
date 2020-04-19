const db = require('../../config/db')


module.exports = {
  all(callback) {
    db.query(`SELECT * FROM recipes ORDER BY id`, function(err, results) {
      if(err) throw `"Database Error!" ${err}`

      callback(results.rows)
    })
  },
  find(id, callback) {
    db.query(`
    SELECT recipes.* 
    FROM recipes
    WHERE recipes.id = $1`, [id], function(err, results) {
      if(err) throw `"Database Error!" ${err}`
      callback(results.rows[0])
    })
  },
  create(data, callback) {
    const query = `
      INSERT INTO recipes (
        chef_id,
        image,
        title,
        ingredients,
        preparation,
        information,
        created_at        
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `

    const values = [
      data.chef_id, 
      data.image, 
      data.title, 
      data.ingredients, 
      data.preparation, 
      data.information,
      data.created_at
      
    ]

    db.query(query, values, function(err, results) {
      if(err) throw `"Database Error!" ${err}`

      callback(results.rows[0])
    })
  },
  update(data, callback) {
    const query = `
    UPDATE recipes SET
      image=($1),
      title=($2),
      ingredients=($3),
      preparation=($4),
      information=($5)
      WHERE id = $6
    `

    const values = [
      data.image,
      data.title,
      data.ingredients,
      data.preparation,
      data.information,
      data.id

    ]

    db.query(query, values, function(err, results) {
      if(err) throw `"Database Error!" ${err}`

      callback()
    })
  },
  delete(id, callback) {
    db.query(`DELETE FROM recipes WHERE id = $1`, [id], function(err, results){
      if(err) throw `"Database Error!" ${err}`

      return callback()
    })
  },
  findBy(filter, callback) {
    db.query(`
    SELECT recipes.*
    FROM recipes
    WHERE recipes.title ILIKE '%${filter}%'
    GROUP BY recipes.id
    ORDER BY recipes.id DESC `, function(err, results) {
      if(err) throw `"Database Error!" ${err}`

      callback(results.rows)
    })
  }


}