<template>
  <div class="upload">
    <div class="sample">
      <h2>Click to upload</h2>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-success="handleSuccess"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">Click to upload</el-button>
        <div slot="tip" class="el-upload__tip">jpg/png files with a size less then 500KB</div>
      </el-upload>
    </div>

    <div class="sample">
      <h2>User avatar upload</h2>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>

    <div class="sample">
      <h2>Photo Wall</h2>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handlePictureCardRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
    </div>

    <div class="sample">
      <h2>Custom file thumbnail</h2>
      <el-upload action="#" list-type="picture-card" :auto-upload="false">
        <i slot="default" class="el-icon-plus"></i>
        <div slot="file" slot-scope="{ file }">
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
          <span class="el-upload-list__item-actions">
            <span class="el-upload-list__item-preview" @click="handlePictureCardPreview2(file)">
              <i class="el-icon-zoom-in"></i>
            </span>
            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handlePictureCardDownload(file)">
              <i class="el-icon-download"></i>
            </span>
            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handlePictureCardRemove2(file)">
              <i class="el-icon-delete"></i>
            </span>
          </span>
        </div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
    </div>

    <div class="sample">
      <h2>FileList with thumbnail</h2>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts"
        :on-preview="handlePreview2"
        :on-remove="handleRemove2"
        :file-list="fileList2"
        list-type="picture"
      >
        <el-button size="small" type="primary">Click to upload</el-button>
        <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
      </el-upload>
    </div>

    <div class="sample">
      <h2>Fil list control</h2>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts"
        :on-change="handleChange"
        :file-list="fileList2"
      >
        <el-button size="small" type="success">Click to upload</el-button>
        <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
      </el-upload>
    </div>

    <div class="sample">
      <h2>Drag to upload</h2>
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts"
        :on-preview="handlePreview"
        :file-list="fileList"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">Drop file heare or <em>Click to upload</em></div>
        <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
      </el-upload>
    </div>

    <div class="sample">
      <h2>Manual upload</h2>
      <el-upload
        class="upload-demo"
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts"
        :auto-upload="false"
      >
        <el-button slot="trigger" size="small" type="primary">select file</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload"
          >upload to server</el-button
        >
        <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data() {
    return {
      fileList: [
        {
          name: 'food.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food2.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
      fileList2: [
        {
          name: 'food.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food2.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
      imageUrl: '',
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
    }
  },
  methods: {
    handleSuccess(file, fileList) {
      console.log('Success')
      console.log({ file: file })
      console.log({ fileList: fileList })
    },
    handleRemove(file, fileList) {
      console.log('Remove')
      console.log({ file: file })
      console.log({ fileList: fileList })
    },
    handlePreview(file) {
      console.log('Preview')
      console.log({ file: file })
      console.log(this.fileList)
    },
    handleExceed(files, fileList) {
      console.log('Exceed')
      console.log({ files: files })
      console.log({ fileList: fileList })
      this.$message.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${files.length +
          fileList.length} totally`
      )
    },
    beforeRemove(file, fileList) {
      console.log('Before Remove')
      console.log(file)
      console.log(fileList)
      return this.$confirm(`Cancel the transfert of ${file.name} ?`)
    },
    handleAvatarSuccess(res, file) {
      console.log('Avatar Upload Success')
      console.log({ res: res })
      console.log({ file: file })
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      console.log('Before Avatar Upload')
      console.log({ file: file })
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('Avatar picture must be JPG format!')
      }
      if (!isLt2M) {
        this.$message.error('Avatar picture size can not exceed 2MB!')
      }

      return isJPG && isLt2M
    },
    handlePictureCardRemove(file, fileList) {
      console.log('Picture Card Remove')
      console.log({ file: file })
      console.log({ fileList: fileList })
    },
    handlePictureCardPreview(file) {
      console.log('Picture Card Preview')
      console.log({ file: file })
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handlePictureCardRemove2(file) {
      console.log('Picture Card Remove')
      console.log({ file: file })
    },
    handlePictureCardPreview2(file) {
      console.log('Picture Card Preview')
      console.log({ file: file })
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handlePictureCardDownload(file) {
      console.log('Picture Card Download')
      console.log(file)
    },
    handleRemove2(file, fileList) {
      console.log('Remove')
      console.log({ file: file })
      console.log({ fileList: fileList })
    },
    handlePreview2(file) {
      console.log('Preview')
      console.log({ file: file })
      console.log(this.fileList)
    },
    handleChange(file, fileList) {
      console.log('Change')
      console.log({ file: file })
      console.log({ fileList: fileList })
      this.fileList2 = fileList.slice(-3)
    },
    submitUpload() {
      this.$refs.upload.submit()
    },
  },
}
</script>

<style>
.sample {
  margin-top: 40px;
  padding: 0 20px 20px;
  border: #ddd solid 1px;
  border-radius: 4px;
}
.sample:first-child {
  margin-top: 0;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
