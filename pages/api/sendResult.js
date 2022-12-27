import connect2db from '../../lib/mongodb';

export default async function handler(
) {
    if (req.method === 'POST') {
        const { _id, result } = req;
        await (await connect2db()).db
            .collection('tests')
            .updateOne({ _id }, { $push: { results: result } });
        res.status(200);
    }
}