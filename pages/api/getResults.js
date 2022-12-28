import connect2db from '../../lib/mongodb';

export default async function handler(
) {
    if (req.method === 'GET') {
        const { title } = req;
        const results = (
            await (await connect2db()).db
                .collection('tests')
                .find({ title })
                .toArray()
        )[0].results;
        return res.json({results});
    }
}