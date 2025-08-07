# 🔌 Integration Guide

This section provides guidance on how we plan to integrate SmartTourismChain with other WordPress plugins and external systems.

## 🛒 WooCommerce

To enable booking-based payment via WooCommerce:

1. Install and activate the WooCommerce plugin.
2. Use the `[smartwisata_booking]` shortcode in a WooCommerce product page.
3. Ensure that the booking is recorded via `stc_handle_offchain_booking()` or on-chain depending on the user selection.
4. Customize checkout behavior as needed.

## 🎓 LMS Integration

You may use SmartTourismChain to tokenize online class reservations or issue NFT-based certificates for completion.

- Recommended LMS plugins: TutorLMS, LearnPress
- Consider integrating with custom post types (CPT) for dynamic bookings

## 🗓️ Events

Integrate with WordPress event plugins like The Events Calendar to tokenize or verify reservations:

- Embed the booking shortcode in event pages
- Display blockchain verification hash using `[stc_tx_status]` shortcode (coming soon)

## 🌐 External API Integration

For external systems:

- Use the REST endpoint `/wp-json/swc/v1/bookings` to pull booking data
- Secure with nonce or JWT if needed
- Use `txHash` or `booking_id` to reconcile between off-chain and on-chain systems

---

Need a specific guide? [Open an issue](https://github.com/ELPEEF/stc-docs/issues) or submit a Pull Request 📬
