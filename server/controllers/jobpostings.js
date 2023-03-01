const Jobposting = require('../models/jobposting');

module.exports.index = async (req, res) => {
    const jobpostings = await Jobposting.find({}).populate('popupText');
    res.render('jobpostings/index', { jobpostings })
}

module.exports.renderNewForm = (req, res) => {
    res.render('jobpostings/new');
}

module.exports.createJobposting = async (req, res, next) => {
    const geoData = await geocoder.forwardGeocode({
        query: req.body.jobposting.location,
        limit: 1
    }).send()
    const jobposting = new Jobposting(req.body.jobposting);
    jobposting.geometry = geoData.body.features[0].geometry;
    jobposting.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    jobposting.author = req.user._id;
    await jobposting.save();
    console.log(jobposting);
    req.flash('success', 'Successfully made a new jobposting!');
    res.redirect(`/jobpostings/${jobposting._id}`)
}

module.exports.showJobposting = async (req, res,) => {
    const jobposting = await Jobposting.findById(req.params.id).populate({
        path: 'reviews',
        populate: {
            path: 'author'
        }
    }).populate('author');
    if (!jobposting) {
        req.flash('error', 'Cannot find that jobposting!');
        return res.redirect('/jobpostings');
    }
    res.render('jobpostings/show', { jobposting });
}

module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const jobposting = await Jobposting.findById(id)
    if (!jobposting) {
        req.flash('error', 'Cannot find that jobposting!');
        return res.redirect('/jobpostings');
    }
    res.render('jobpostings/edit', { jobposting });
}

module.exports.updateJobposting = async (req, res) => {
    const { id } = req.params;
    console.log(req.body);
    const jobposting = await Jobposting.findByIdAndUpdate(id, { ...req.body.jobposting });
    const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }));
    jobposting.images.push(...imgs);
    await jobposting.save();
    if (req.body.deleteImages) {
        for (let filename of req.body.deleteImages) {
            await cloudinary.uploader.destroy(filename);
        }
        await jobposting.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } })
    }
    req.flash('success', 'Successfully updated jobposting!');
    res.redirect(`/jobpostings/${jobposting._id}`)
}

module.exports.deleteJobposting = async (req, res) => {
    const { id } = req.params;
    await Jobposting.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted jobposting')
    res.redirect('/jobpostings');
}