import unittest
from jodel_ssr import ssr_distribution, cosine, POSITIONING, PRICING, ANCHORS

class SSRTests(unittest.TestCase):
    def test_identical_vectors_have_unit_similarity(self):
        self.assertAlmostEqual(cosine([1, 2, 3], [1, 2, 3]), 1.0)

    def test_extreme_anchor_alignment(self):
        anchors = [[[-1.0, 0.0], [-0.5, 0.5], [0.0, 1.0], [0.5, 0.5], [1.0, 0.0]] for _ in range(6)]
        dist = ssr_distribution([1.0, 0.0], anchors)
        self.assertAlmostEqual(sum(dist), 1.0)
        self.assertEqual(dist.index(max(dist)), 4)

    def test_all_equal_fallback(self):
        anchors = [[[1, 0]] * 5 for _ in range(6)]
        for value in ssr_distribution([1, 0], anchors):
            self.assertAlmostEqual(value, 0.2)

    def test_concepts_have_matched_guide_price(self):
        self.assertEqual(len(POSITIONING), 3)
        self.assertTrue(all("£21.50" in c for c in POSITIONING.values()))
        self.assertEqual(len(PRICING), 3)

    def test_six_five_point_anchors(self):
        self.assertEqual(len(ANCHORS), 6)
        self.assertTrue(all(len(g) == 5 for g in ANCHORS))

if __name__ == "__main__":
    unittest.main()
