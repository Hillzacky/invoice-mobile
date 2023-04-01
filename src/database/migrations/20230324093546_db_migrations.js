/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
	return knex.schema
	.createTable('users', function (table) {
		table.increments('id_usr');
		table.string('full_name', 255).notNullable();
		table.string('username', 255).notNullable();
		table.text('password').notNullable();
		table.integer('level', 1).notNullable().defaultTo(3);
		table.decimal('status', 1).notNullable().defaultTo(2);
		table.timestamps(true, true);
	})
	.createTable('suppliers', function (table) {
		table.increments('id_spl');
		table.string('full_name', 255).notNullable();
		table.text('address').notNullable();
		table.string('email', 255).nullable();
		table.decimal('bank_number', 255).nullable();
		table.decimal('contact', 255).nullable();
		table.timestamps(true, true);
	})
	.createTable('products', function (table) {
		table.increments('id_prod');
		table.string('name', 1024).notNullable();
		table.text('desc').notNullable();
		table.decimal('price').notNullable();
		table.decimal('price_online').notNullable();
		table.decimal('price_offline').notNullable();
		table.integer('stock',255).notNullable();
		table.blob('images').nullable();
		table.string('note', 1024).notNullable();
		table.integer('id_cat', 255).notNullable();
		table.integer('pay', 1).notNullable().defaultTo(1);
		table.integer('status', 1).notNullable().defaultTo(2);
		table.integer('visible', 1).notNullable().defaultTo(2);
		table.timestamps(true, true);
	})
	.createTable('customers', function (table) {
		table.increments('id_cust');
		table.string('cust_name', 64).notNullable();
		table.string('cust_addr', 1024).notNullable();
		table.string('cust_telp', 16).notNullable();
		table.timestamps(true, true);
	})
	.createTable('payments', function (table) {
		table.increments('id_pay');
		table.string('pay_method', 64).notNullable();
		table.integer('pay_depo', 255).notNullable().defaultTo(0);
		table.integer('pay_stats', 1).notNullable().defaultTo(2);
		table.string('invoice_code', 255).notNullable();
		table.timestamps(true, true);
	})
	.createTable('transaction', function (table) {
		table.increments('id_trx');
		table.string('invoice_code', 255).notNullable();
		table.enum('type', ['offline','online']).notNullable();
		table.string('expedisi', 16).notNullable();
		table.text('note').nullable();
		table.date('delivered').nullable();
		table.integer('id_cust').notNullable();
		table.integer('id_pay').notNullable();
		table.integer('id_usr').notNullable();
		table.timestamps(true, true);
	})
	.createTable('category', function (table) {
		table.increments('id_cat');
		table.string('category', 128).notNullable();
		table.timestamps(true, true);
	})
	.createTable('settings', function (table) {
		table.increments('id_s');
		table.string('key', 255).notNullable();
		table.string('value', 255).notNullable();
		table.timestamps(true, true);
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
		.dropTable("category")
		.dropTable("transaction")
		.dropTable("payments")
		.dropTable("customers")
		.dropTable("suppliers")
		.dropTable("users")
		.dropTable("settings");
};

exports.config = {  };
