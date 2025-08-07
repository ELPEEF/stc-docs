# 🪝 Developer Hooks

SmartTourismChain provides actions and filters for developers to extend functionality.

## 🎬 Actions

### `do_action( 'stc_after_booking_saved', $booking_id, $data );`

- Fired after an off-chain booking is saved
- Parameters:
  - `$booking_id` (string)
  - `$data` (array)

### `do_action( 'stc_onchain_tx_completed', $txHash, $bookingData );`

- Triggered when on-chain booking is confirmed
- Use this to sync external systems or notify admins

## 🧪 Filters

### `apply_filters( 'stc_booking_form_fields', $fields );`

- Customize visible form fields

### `apply_filters( 'stc_contract_config', $config );`

- Override contract address or ABI for advanced setup

---

Have ideas for more hooks? [Contribute on GitHub](https://github.com/ELPEEF/stc-docs/pulls)
