import { RequestHandler } from 'express';
import {evmMultisig, SignedTXsPackage, SignTXsPackage} from "@libs/types/blockchain.types";
import {
  confirmEvmMultisigTransactionTransfer,
  confirmEVMMultisigTransacton,
  signTxs
} from "../dusdStakingSigner";


export const confirmEvmTranferHandler: RequestHandler<unknown,  unknown, evmMultisig>
    = async (req, res, next) => {
  try {

    const { randomId, transactionId } = req.body;

    await confirmEvmMultisigTransactionTransfer(randomId, transactionId);

    res.status(200).status(200).json({
      status: 'confirmed',
      message: `Data ${randomId} and ${transactionId}`,

    });
  } catch (err) {
    next(err);
  }
};

export const confirmEvmHandler: RequestHandler<unknown,  unknown, evmMultisig>
    = async (req, res, next) => {
  try {

    const { randomId, transactionId } = req.body;

    await confirmEVMMultisigTransacton(randomId, transactionId);

    res.status(200).status(200).json({
      status: 'confirmed',
      message: `Data ${randomId} and ${transactionId}`,

    });
  } catch (err) {
    next(err);
  }
};

export const signTxsHandler: RequestHandler<unknown,  SignedTXsPackage, SignTXsPackage>
    = async (req, res, next) => {
  try {

    const { transactions, prevPubKey, redeemScript } = req.body;

    const signed = await signTxs(transactions, prevPubKey, redeemScript);

    res.status(200).status(200).json({
      transactions: signed
    });
  } catch (err) {
    next(err);
  }
};
