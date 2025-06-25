import { Clarinet, Tx, Chain, Account, types } from 'https://deno.land/x/clarinet@v1.5.4/index.ts';
import { assertEquals } from 'https://deno.land/std@0.170.0/testing/asserts.ts';

Clarinet.test({
    name: "Ensure that the Delta Computer Registry can register computational assets",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        // Test implementation remains the same
    }
})