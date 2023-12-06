<template>
    <div class="flex">
        <img src="/timeline.svg" class="mt-2" />
        <div class="ml-4">
            <div class="font-bold text-[24px]">Create Assets</div>
            <div>
                <p class="font-bold text-[16px] mt-8">Printer and Material</p>
                <p class="text-[14px] max-w-[460px]">Select a pre configured printer and material, If we dont have what your
                    looking for
                    you can define a
                    custom printer or material with any build plate size, start end gcode, print temperature range and many
                    more options.</p>
            </div>
            <div class="mt-8">
                <p class="font-bold text-[16px]">Print Profile</p>
                <p class="text-[14px] max-w-[460px]">Create a print profile using any combination of printer, material and
                    nozzle size. </p>
            </div>
            <div class="font-bold text-[24px] mt-[202px]">Run Calibration</div>
            <div class="mt-4">
                <p class="font-bold text-[16px]">Start a Calibration</p>
                <div class="text-[14px] max-w-[420px]">
                    <div>
                        Start a calibration from the Print Profile you just created. This
                        calibration will be linked to that Print Profile.
                    </div>
                    <a href=" #" style="color:#F3762B;display: inline-block;">
                        Learn More about Print Profiles >
                    </a>
                </div>
            </div>
            <div class="mt-8">
                <p class="font-bold text-[16px]">Add Prints</p>
                <div class="text-[14px] max-w-[420px]">
                    <div>
                        A calibration is split up into a number of Prints. There can be any number of prints in a
                        calibration including a mixture of Freestyle and AI Prints.
                    </div>
                    <a href=" #" style="color:#F3762B;display: inline-block;">
                        Learn More about Calibration Prints >
                    </a>
                </div>
            </div>
            <div class="mt-11">
                <p class="font-bold text-[16px]">Print and Score Quality</p>
                <div class="text-[14px] max-w-[420px]">
                    <div>
                        Score the quality of stringing and under extrusion from 1-10. 1 being a failed print and 10 being
                        perfect quality. These scores are what the algorithm uses to determine the next set of settings to
                        you.
                    </div>
                    <a href=" #" style="color:#F3762B;display: inline-block;">
                        Open Scoring Guide >
                    </a>
                </div>
            </div>
            <div class="mt-[85px]">
                <p class="font-bold text-[16px]">Repeat</p>
                <div class="text-[14px] max-w-[420px]">
                    <div>
                        As you add and score more prints the AI refines its model customized for your printer, material and
                        nozzle size. Typically after around 5-7 prints users see satisfactory results. Its also common that
                        we get it on the first or second print.
                    </div>
                </div>
            </div>
            <div class="mt-[100px]">
                <p class="font-bold text-[24px]">Export Settings to Cura</p>
                <div class="text-[14px] max-w-[420px]">
                    <div>
                        Once you have settings that work well, you can export them to use for anything you want. The Print
                        Level you export update the print profile the calibration is in, so later you can simply re download
                        that print profile to use these settings again.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
