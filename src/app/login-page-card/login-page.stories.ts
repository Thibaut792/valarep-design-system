import { CommonModule } from "@angular/common";
import { LoginPageCardComponent } from "./login-page-card.component";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";

export default {
    title: 'Connexion/LoginPage',
    component: LoginPageCardComponent,
    decorators: [
        moduleMetadata({
            imports: [
                CommonModule,
                NgHeroiconsModule
            ],
        })
    ],
    args: {
        title: 'New Card Title !!',
    }
} as Meta<LoginPageCardComponent>;

const baseTemplate: Story = (args) => ({
    props: args
});

export const Default = baseTemplate.bind({});

export const SuperTitle = baseTemplate.bind({});
SuperTitle.args = {
    title: 'Super Title',
};