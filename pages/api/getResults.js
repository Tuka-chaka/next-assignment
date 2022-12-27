import connect2db from '../../lib/mongodb';

export default async function handler(
) {
    if (req.method === 'GET') {
        const { id } = req;
        const results = (
            await (await connect2db()).db
                .collection('tests')
                .find({ id })
                .toArray()
        )[0].results;
        res.status(200).json({ results });
    }
}