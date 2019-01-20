import { mount } from '@vue/test-utils';
import Form from "@/components/Form.vue";
import Utils from '../utils';

describe('Form.vue', () => {

    it('Should exists dollar and euro fields', () => {
        const wrapper = mount(Form);
        expect(wrapper.contains("input[name=dollarAmount]")).toBe(true);
        expect(wrapper.contains("input[name=euroAmount]")).toBe(true);
    });

    it('Should valid dollar amount', () => {
        const wrapper = mount(Form, {
            data: function() {
                return {
                    dollar: ""
                };
            }
        });
        wrapper.vm.calculate();
        expect(wrapper.vm.errors.length).toEqual(1);
    });

    it('Should valid dollar amount', () => {
        const wrapper = mount(Form, {
            data: function() {
                return {
                    dollar: "2999"
                };
            }
        });
        wrapper.vm.calculate();
        expect(wrapper.vm.errors.length).toEqual(1);
    });

    it('Should valid dollar amount', () => {
        const wrapper = mount(Form, {
            data: function() {
                return {
                    dollar: "200."
                };
            }
        });
        wrapper.vm.calculate();
        expect(wrapper.vm.errors.length).toEqual(1);
    });

    it('Should return success euro amount', async (done) => {
        const wrapper = mount(Form, {
            data: function() {
                return {
                    dollar: "299"
                };
            }
        });
        wrapper.vm.calculate();
        await Utils.timeout(() => {
            expect(wrapper.vm.euro).toBeDefined();
            done();
        });
    });

    it('Should return success euro amount', async (done) => {
        const wrapper = mount(Form, {
            data: function() {
                return {
                    dollar: "2,990"
                };
            }
        });
        wrapper.vm.calculate();
        await Utils.timeout(() => {
            expect(wrapper.vm.euro).toBeDefined();
            done();
        });
    });

    it('Should return success euro amount', async (done) => {
        const wrapper = mount(Form, {
            data: function() {
                return {
                    dollar: "2,990.1234"
                };
            }
        });
        wrapper.vm.calculate();
        await Utils.timeout(() => {
            expect(wrapper.vm.euro).toBeDefined();
            done();
        });
    });
});