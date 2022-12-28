
import connect2db from '../../lib/mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, result } = JSON.parse(req.body);
        console.log(result)
        await (await connect2db()).db
            .collection('tests')
            .updateOne({ title: title }, { $set: { results: result } });
        return res.json({property: 'value'});
    }
}