
import connect2db from '../../lib/mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, result } = JSON.parse(req.body);
        console.log(title)
        console.log(await (await connect2db()).db
        .collection('tests').findOne({title: title}))
        await (await connect2db()).db
            .collection('tests')
            .updateOne({ title: title }, { $set: { results: result } });
        return res.json({property: 'value'});
    }
}