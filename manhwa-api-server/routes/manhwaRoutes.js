const express = require('express');
const router = express.Router();
const Manhwa = require('../models/manhwaModel');

/**
 * @swagger
 * /api/manhwas:
 *   post:
 *     summary: Create a new manhwa
 *     tags:
 *       - Manhwas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               genre:
 *                 type: array
 *                 items:
 *                   type: string
 *               status:
 *                 type: string
 *                 enum: [Ongoing, Completed]
 *               rating:
 *                 type: number
 *                 minimum: 0
 *                 maximum: 10
 *               imageUrl:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', async (req, res) => {
  try {
    const manhwa = new Manhwa(req.body);
    await manhwa.save();
    res.status(201).send(manhwa);
  } catch (err) {
    res.status(400).send(err);
  }
});

/**
 * @swagger
 * /api/manhwas:
 *   get:
 *     summary: Get all manhwas
 *     tags:
 *       - Manhwas
 *     responses:
 *       200:
 *         description: A list of manhwas
 */
router.get('/', async (req, res) => {
  const manhwas = await Manhwa.find();
  res.send(manhwas);
});

/**
 * @swagger
 * /api/manhwas/{id}:
 *   get:
 *     summary: Get a single manhwa by ID
 *     tags:
 *       - Manhwas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Manhwa ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Manhwa data
 *       404:
 *         description: Manhwa not found
 */
router.get('/:id', async (req, res) => {
  const manhwa = await Manhwa.findById(req.params.id);
  res.send(manhwa);
});

/**
 * @swagger
 * /api/manhwas/{id}:
 *   put:
 *     summary: Update a manhwa by ID
 *     tags:
 *       - Manhwas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Manhwa ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               genre:
 *                 type: array
 *                 items:
 *                   type: string
 *               status:
 *                 type: string
 *                 enum: [Ongoing, Completed]
 *               rating:
 *                 type: number
 *                 minimum: 0
 *                 maximum: 10
 *               imageUrl:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated successfully
 *       404:
 *         description: Manhwa not found
 */
router.put('/:id', async (req, res) => {
  const manhwa = await Manhwa.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(manhwa);
});

/**
 * @swagger
 * /api/manhwas/{id}:
 *   delete:
 *     summary: Delete a manhwa by ID
 *     tags:
 *       - Manhwas
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Manhwa ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Manhwa not found
 */
router.delete('/:id', async (req, res) => {
  await Manhwa.findByIdAndDelete(req.params.id);
  res.send({ message: 'Deleted successfully' });
});

module.exports = router;
