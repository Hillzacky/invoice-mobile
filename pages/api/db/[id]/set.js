import db from '@app/system/database/db';

export default async (req,res) => {
  if(req.method!=='PUT') return res.status(405).end();
	const { id } = req.query;
	const { trx, updated_at } = res.body;
	const set = await db('transaction')
				.where({ id })
				.update({
					trx: trx,
					updated_at: updated_at ?? ( new Date().toISOString() )
				})
	res.status(200);
	res.json({
		code: req.status,
		message: 'update success'
	})
}
