export default function handler(req, res){
    if (req.query.disable === 'true')
        res.clearPreviewData()
    else if (req.query.disable === 'false')
        res.setPreviewData({name: 'pavel'})
    res.redirect(req.query.redirect)
}