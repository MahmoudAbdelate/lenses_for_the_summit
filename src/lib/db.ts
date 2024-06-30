import { createClient } from '@supabase/supabase-js';

export default createClient(
	'https://krcynzedtqfutbudubqd.supabase.co',
	process.env.SUPABASE_KEY ?? "SUPABASE_KEY isn't found in /.env file or svelte couldn't get it"
);
