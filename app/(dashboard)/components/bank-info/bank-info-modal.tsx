
import Modal from "../ui/modal"
import Button from "@/app/(landing)/components/ui/button";
export const IDR = "Rp";

type TBankInfoModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

const BankInfoModal = ({ isOpen, onClose }: TBankInfoModalProps) => {

    return (
        <Modal isOpen={isOpen}
            onClose={onClose}
            title="Add Bank Account">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 w-full">
                    <div className="input-group-admin">
                        <label htmlFor="bankName">
                            Bank Name
                        </label>
                        <input
                            type="text"
                            id="bankName"
                            name="bankName"
                            placeholder="e. g. mandiri, BCA, BRI"
                        />
                    </div>
                    <div className="input-group-admin">
                        <label htmlFor="accountNumber">
                            Account Number
                        </label>
                        <input
                            type="number"
                            id="accountNumber"
                            name="accountNumber"
                            placeholder="12341412345643"
                        />
                    </div>
                    <div className="input-group-admin">
                        <label htmlFor="accountHolder">
                            Account Holder
                        </label>
                        <input
                            type="text"
                            id="accountHolder"
                            name="accountHolders"
                            placeholder="Holder Name ad registered on the account"
                        />
                    </div>
                </div>
                <Button className="ml-auto mt-3 rounded-lg cursor-pointer">
                    Add Bank Account
                </Button>
            </div>
        </Modal >
    )
}
export default BankInfoModal